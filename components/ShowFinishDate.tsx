'use client'

import { useEffect, useState } from "react"

const STORAGE_KEY = "show-finish-date"

type ShowData = {
    id: string
    name: string
    episodeCount: string
    lastEpisodeWatched: string
    episodesPerDay: string
}

function createShow(): ShowData {
    return {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: "",
        episodeCount: "25",
        lastEpisodeWatched: "0",
        episodesPerDay: "4",
    }
}

function normalizeShow(show: Partial<ShowData>): ShowData {
    return {
        id: show.id || createShow().id,
        name: String(show.name ?? ""),
        episodeCount: String(show.episodeCount ?? "25"),
        lastEpisodeWatched: String(show.lastEpisodeWatched ?? "0"),
        episodesPerDay: String(show.episodesPerDay ?? "4"),
    }
}

function getShowStats(show: ShowData) {
    const total = Number(show.episodeCount)
    const watched = Number(show.lastEpisodeWatched)
    const perDay = Number(show.episodesPerDay)

    const valid =
        show.name.trim().length > 0 &&
        show.episodeCount.trim() !== "" &&
        show.lastEpisodeWatched.trim() !== "" &&
        show.episodesPerDay.trim() !== "" &&
        Number.isInteger(total) &&
        Number.isInteger(watched) &&
        Number.isFinite(perDay) &&
        total > 0 &&
        watched >= 0 &&
        watched <= total &&
        perDay > 0

    const remaining = valid ? total - watched : 0
    const days = valid ? Math.ceil(remaining / perDay) : 0
    const progress = valid ? (watched / total) * 100 : 0

    const finishDate = new Date()
    finishDate.setHours(12, 0, 0, 0)
    finishDate.setDate(finishDate.getDate() + days)

    return {
        valid,
        total,
        watched,
        perDay,
        remaining,
        days,
        progress,
        finishDate,
    }
}

function formatDate(date: Date) {
    return date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
    })
}

export function ShowFinishDate() {
    const [shows, setShows] = useState<ShowData[]>([])
    const [expandedIds, setExpandedIds] = useState<string[]>([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY)

            if (saved) {
                const parsed = JSON.parse(saved)
                const savedShows = Array.isArray(parsed) ? parsed : [parsed]

                setShows(
                    savedShows.map((show: Partial<ShowData>) =>
                        normalizeShow(show)
                    )
                )
            } else {
                const initialShow = createShow()
                setShows([initialShow])
                setExpandedIds([initialShow.id])
            }
        } catch {
            const initialShow = createShow()
            setShows([initialShow])
            setExpandedIds([initialShow.id])
        } finally {
            setLoaded(true)
        }
    }, [])

    useEffect(() => {
        if (!loaded) return

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(shows))
        } catch {
            // Storage may be unavailable or full.
        }
    }, [shows, loaded])

    function updateShow(
        id: string,
        field: keyof Omit<ShowData, "id">,
        value: string
    ) {
        setShows((current) =>
            current.map((show) =>
                show.id === id ? { ...show, [field]: value } : show
            )
        )
    }

    function addShow() {
        const show = createShow()
        setShows((current) => [...current, show])
        setExpandedIds((current) => [...current, show.id])
    }

    function removeShow(id: string) {
        setShows((current) => current.filter((show) => show.id !== id))
        setExpandedIds((current) =>
            current.filter((expandedId) => expandedId !== id)
        )
    }

    function toggleShow(id: string) {
        setExpandedIds((current) =>
            current.includes(id)
                ? current.filter((expandedId) => expandedId !== id)
                : [...current, id]
        )
    }

    const inputStyle = {
        width: "100%",
        boxSizing: "border-box" as const,
        padding: "12px 14px",
        borderRadius: "10px",
        border: "1px solid #343541",
        background: "#171820",
        color: "#f5f5f7",
        fontSize: "15px",
        outline: "none",
    }

    const labelStyle = {
        display: "block",
        fontSize: "11px",
        fontWeight: 600,
        color: "#a4a5b5",
        marginBottom: "8px",
        letterSpacing: "0.04em",
        textTransform: "uppercase" as const,
    }

    const cardStyle = {
        background: "#20212b",
        border: "1px solid #343541",
        borderRadius: "16px",
        overflow: "hidden" as const,
    }

    return (
        <section
            style={{
                width: "100%",
                maxWidth: "680px",
                margin: "0 auto",
                padding: "24px",
                boxSizing: "border-box",
                borderRadius: "24px",
                background: "#111218",
                color: "#f5f5f7",
                fontFamily:
                    "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
                border: "1px solid #292a35",
            }}
        >
            <header style={{ marginBottom: "24px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "8px",
                    }}
                >
                    <span style={{ fontSize: "25px" }}>◷</span>
                    <h2
                        style={{
                            margin: 0,
                            fontSize: "23px",
                            fontWeight: 750,
                            letterSpacing: "-0.04em",
                        }}
                    >
                        Show countdown
                    </h2>
                </div>

                <p
                    style={{
                        margin: 0,
                        color: "#a4a5b5",
                        fontSize: "13px",
                        lineHeight: 1.6,
                    }}
                >
                    Plan your next binge. Track every show at your own pace.
                </p>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginTop: "20px",
                    }}
                >
                    <span style={{ color: "#a4a5b5", fontSize: "13px" }}>
                        {shows.length} {shows.length === 1 ? "show" : "shows"}{" "}
                        tracked
                    </span>

                    <button
                        type="button"
                        onClick={addShow}
                        style={{
                            padding: "11px 15px",
                            borderRadius: "10px",
                            border: "1px solid #7665dc",
                            background: "#7665dc",
                            color: "#fff",
                            fontWeight: 650,
                            fontSize: "13px",
                            cursor: "pointer",
                        }}
                    >
                        + Add show
                    </button>
                </div>
            </header>

            {!loaded ? (
                <p style={{ color: "#a4a5b5", fontSize: "13px" }}>
                    Loading your shows…
                </p>
            ) : shows.length === 0 ? (
                <div
                    style={{
                        ...cardStyle,
                        padding: "30px 20px",
                        textAlign: "center",
                    }}
                >
                    <div style={{ fontSize: "30px", marginBottom: "12px" }}>
                        📺
                    </div>
                    <h3 style={{ margin: "0 0 8px", fontSize: "17px" }}>
                        Nothing on your watchlist yet
                    </h3>
                    <p
                        style={{
                            color: "#a4a5b5",
                            fontSize: "13px",
                            lineHeight: 1.6,
                            margin: "0 0 18px",
                        }}
                    >
                        Add a show to start planning when you'll finish it.
                    </p>
                    <button
                        type="button"
                        onClick={addShow}
                        style={{
                            ...inputStyle,
                            width: "auto",
                            background: "#7665dc",
                            borderColor: "#7665dc",
                            cursor: "pointer",
                            fontWeight: 650,
                        }}
                    >
                        + Add your first show
                    </button>
                </div>
            ) : (
                <div style={{ display: "grid", gap: "12px" }}>
                    {shows.map((show, index) => {
                        const stats = getShowStats(show)
                        const expanded = expandedIds.includes(show.id)

                        const summaryDate = stats.valid
                            ? stats.remaining === 0
                                ? "Completed"
                                : formatDate(stats.finishDate)
                            : "Enter show details"

                        return (
                            <article key={show.id} style={cardStyle}>
                                {/* Always-visible summary / accordion trigger */}
                                <button
                                    type="button"
                                    onClick={() => toggleShow(show.id)}
                                    aria-expanded={expanded}
                                    aria-controls={`details-${show.id}`}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px",
                                        width: "100%",
                                        padding: "17px",
                                        border: "none",
                                        background: expanded
                                            ? "#272532"
                                            : "transparent",
                                        color: "#f5f5f7",
                                        textAlign: "left",
                                        cursor: "pointer",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            width: "34px",
                                            height: "34px",
                                            borderRadius: "10px",
                                            background: "#343047",
                                            color: "#b6aaff",
                                            fontSize: "15px",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {index + 1}
                                    </span>

                                    <span
                                        style={{
                                            display: "block",
                                            flex: 1,
                                            minWidth: 0,
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "block",
                                                fontSize: "14px",
                                                fontWeight: 700,
                                                lineHeight: 1.4,
                                                overflowWrap: "anywhere",
                                            }}
                                        >
                                            {show.name.trim() ||
                                                "Untitled show"}
                                        </span>

                                        <span
                                            style={{
                                                display: "block",
                                                marginTop: "4px",
                                                color: "#a4a5b5",
                                                fontSize: "11px",
                                            }}
                                        >
                                            {stats.valid
                                                ? `${stats.watched}/${stats.total} episodes · ${stats.remaining} left`
                                                : "Incomplete details"}
                                        </span>

                                        <span
                                            style={{
                                                display: "block",
                                                marginTop: "9px",
                                                height: "4px",
                                                background: "#3a3947",
                                                borderRadius: "99px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: "block",
                                                    width: `${stats.valid ? stats.progress : 0}%`,
                                                    height: "100%",
                                                    borderRadius: "99px",
                                                    background:
                                                        "linear-gradient(90deg, #8171ff, #b6aaff)",
                                                }}
                                            />
                                        </span>
                                    </span>

                                    <span
                                        style={{
                                            flexShrink: 0,
                                            textAlign: "right",
                                            maxWidth: "105px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "block",
                                                color: "#b6aaff",
                                                fontSize: "11px",
                                                fontWeight: 700,
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {summaryDate}
                                        </span>
                                        {stats.valid && (
                                            <span
                                                style={{
                                                    display: "block",
                                                    marginTop: "4px",
                                                    color: "#898a9b",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                {stats.remaining === 0
                                                    ? "All caught up"
                                                    : `${stats.days} day${stats.days === 1 ? "" : "s"} left`}
                                            </span>
                                        )}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        style={{
                                            flexShrink: 0,
                                            color: "#898a9b",
                                            fontSize: "14px",
                                            transform: expanded
                                                ? "rotate(180deg)"
                                                : "rotate(0deg)",
                                            transition: "transform 180ms ease",
                                        }}
                                    >
                                        ▾
                                    </span>
                                </button>

                                {expanded && (
                                    <div
                                        id={`details-${show.id}`}
                                        style={{
                                            padding: "18px",
                                            borderTop: "1px solid #343541",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                marginBottom: "16px",
                                            }}
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeShow(show.id)
                                                }
                                                style={{
                                                    border: "1px solid #45404c",
                                                    borderRadius: "8px",
                                                    background: "transparent",
                                                    color: "#b9a9bd",
                                                    padding: "7px 10px",
                                                    fontSize: "12px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Remove show ×
                                            </button>
                                        </div>

                                        <div style={{ marginBottom: "18px" }}>
                                            <label
                                                htmlFor={`name-${show.id}`}
                                                style={labelStyle}
                                            >
                                                Show name
                                            </label>
                                            <input
                                                id={`name-${show.id}`}
                                                type="text"
                                                placeholder="e.g. Orb: On the Movements of the Earth"
                                                value={show.name}
                                                onChange={(e) =>
                                                    updateShow(
                                                        show.id,
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                style={inputStyle}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns:
                                                    "repeat(2, minmax(0, 1fr))",
                                                gap: "12px",
                                            }}
                                        >
                                            <div>
                                                <label
                                                    htmlFor={`total-${show.id}`}
                                                    style={labelStyle}
                                                >
                                                    Total episodes
                                                </label>
                                                <input
                                                    id={`total-${show.id}`}
                                                    type="number"
                                                    min="1"
                                                    step="1"
                                                    value={show.episodeCount}
                                                    onChange={(e) =>
                                                        updateShow(
                                                            show.id,
                                                            "episodeCount",
                                                            e.target.value
                                                        )
                                                    }
                                                    style={inputStyle}
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor={`watched-${show.id}`}
                                                    style={labelStyle}
                                                >
                                                    Last watched
                                                </label>
                                                <input
                                                    id={`watched-${show.id}`}
                                                    type="number"
                                                    min="0"
                                                    max={show.episodeCount}
                                                    step="1"
                                                    value={
                                                        show.lastEpisodeWatched
                                                    }
                                                    onChange={(e) =>
                                                        updateShow(
                                                            show.id,
                                                            "lastEpisodeWatched",
                                                            e.target.value
                                                        )
                                                    }
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        <div style={{ marginTop: "16px" }}>
                                            <label
                                                htmlFor={`pace-${show.id}`}
                                                style={labelStyle}
                                            >
                                                Episodes per day
                                            </label>
                                            <input
                                                id={`pace-${show.id}`}
                                                type="number"
                                                min="0.1"
                                                step="any"
                                                value={show.episodesPerDay}
                                                onChange={(e) =>
                                                    updateShow(
                                                        show.id,
                                                        "episodesPerDay",
                                                        e.target.value
                                                    )
                                                }
                                                style={inputStyle}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                marginTop: "20px",
                                                padding: "16px",
                                                borderRadius: "12px",
                                                background:
                                                    "linear-gradient(145deg, #28233e, #20212b)",
                                                border: "1px solid #494064",
                                            }}
                                        >
                                            {!stats.valid ? (
                                                <p
                                                    style={{
                                                        color: "#c1c1cf",
                                                        fontSize: "12px",
                                                        lineHeight: 1.6,
                                                        margin: 0,
                                                    }}
                                                >
                                                    Enter a name, valid episode
                                                    counts, and a positive
                                                    viewing pace to calculate
                                                    your finish date.
                                                </p>
                                            ) : (
                                                <>
                                                    <p
                                                        style={{
                                                            margin: "0 0 6px",
                                                            color: "#b6aaff",
                                                            fontSize: "11px",
                                                            fontWeight: 700,
                                                            textTransform:
                                                                "uppercase",
                                                            letterSpacing:
                                                                "0.07em",
                                                        }}
                                                    >
                                                        {stats.remaining === 0
                                                            ? "Series complete"
                                                            : "Estimated finish date"}
                                                    </p>

                                                    <h3
                                                        style={{
                                                            margin: "0 0 7px",
                                                            fontSize: "24px",
                                                            lineHeight: 1.35,
                                                            letterSpacing:
                                                                "-0.03em",
                                                        }}
                                                    >
                                                        {stats.remaining === 0
                                                            ? "You've made it!"
                                                            : stats.finishDate.toLocaleDateString(
                                                                  undefined,
                                                                  {
                                                                      weekday:
                                                                          "short",
                                                                      day: "numeric",
                                                                      month: "long",
                                                                      year: "numeric",
                                                                  }
                                                              )}
                                                    </h3>

                                                    <p
                                                        style={{
                                                            margin: 0,
                                                            color: "#c1c1cf",
                                                            fontSize: "12px",
                                                            lineHeight: 1.6,
                                                        }}
                                                    >
                                                        {stats.remaining === 0
                                                            ? `${show.name} is all caught up.`
                                                            : `${stats.remaining} episode${stats.remaining === 1 ? "" : "s"} left · ${stats.days} day${stats.days === 1 ? "" : "s"} at ${stats.perDay} per day`}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </article>
                        )
                    })}
                </div>
            )}

            <footer
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "20px",
                    color: "#77788a",
                    fontSize: "11px",
                }}
            >
                <span>◉ Saved locally in this browser</span>
                <span>Updates automatically</span>
            </footer>
        </section>
    )
}
