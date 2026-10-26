
'use client'

import { useEffect, useState } from "react"

const STORAGE_KEY = "show-finish-date"

type ShowData = {
    name: string
    episodeCount: string
    lastEpisodeWatched: string
    episodesPerDay: string
}

const DEFAULT_SHOW: ShowData = {
    name: "",
    episodeCount: "25",
    lastEpisodeWatched: "0",
    episodesPerDay: "4",
}

export function ShowFinishDate() {
    const [show, setShow] = useState<ShowData>(DEFAULT_SHOW)
    const [loaded, setLoaded] = useState(false)

    // Load saved inputs once, after the component mounts in the browser.
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY)

            if (saved) {
                const parsed = JSON.parse(saved)

                setShow({
                    name: String(parsed.name ?? DEFAULT_SHOW.name),
                    episodeCount: String(
                        parsed.episodeCount ?? DEFAULT_SHOW.episodeCount
                    ),
                    lastEpisodeWatched: String(
                        parsed.lastEpisodeWatched ??
                            DEFAULT_SHOW.lastEpisodeWatched
                    ),
                    episodesPerDay: String(
                        parsed.episodesPerDay ?? DEFAULT_SHOW.episodesPerDay
                    ),
                })
            }
        } catch {
            // Ignore invalid or unavailable local storage.
        } finally {
            setLoaded(true)
        }
    }, [])

    // Save every change, but never overwrite saved data before loading it.
    useEffect(() => {
        if (!loaded) return

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(show))
        } catch {
            // Storage may be unavailable or full.
        }
    }, [show, loaded])

    function update(field: keyof ShowData, value: string) {
        setShow((current) => ({ ...current, [field]: value }))
    }

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

    // Use local calendar dates rather than adding milliseconds to the current time.
    const finishDate = new Date()
    finishDate.setHours(12, 0, 0, 0)
    finishDate.setDate(finishDate.getDate() + days)

    const formattedDate = finishDate.toLocaleDateString(undefined, {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
    })

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
        fontSize: "12px",
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
        padding: "20px",
    }

    return (
        <section
            style={{
                width: "100%",
                maxWidth: "620px",
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
            <header style={{ marginBottom: "26px" }}>
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
                            fontSize: "22px",
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
                    Your next binge, mapped out. All settings are saved
                    locally on this device.
                </p>
            </header>

            <div style={{ display: "grid", gap: "18px" }}>
                <div>
                    <label htmlFor="show-name" style={labelStyle}>
                        Show name
                    </label>
                    <input
                        id="show-name"
                        type="text"
                        placeholder="e.g. Orb: On the Movements of the Earth"
                        value={show.name}
                        onChange={(e) => update("name", e.target.value)}
                        style={inputStyle}
                    />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "14px",
                    }}
                >
                    <div>
                        <label htmlFor="episode-count" style={labelStyle}>
                            Total episodes
                        </label>
                        <input
                            id="episode-count"
                            type="number"
                            min="1"
                            step="1"
                            value={show.episodeCount}
                            onChange={(e) =>
                                update("episodeCount", e.target.value)
                            }
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label htmlFor="last-watched" style={labelStyle}>
                            Last watched
                        </label>
                        <input
                            id="last-watched"
                            type="number"
                            min="0"
                            max={show.episodeCount}
                            step="1"
                            value={show.lastEpisodeWatched}
                            onChange={(e) =>
                                update("lastEpisodeWatched", e.target.value)
                            }
                            style={inputStyle}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="episodes-per-day" style={labelStyle}>
                        Episodes per day
                    </label>
                    <input
                        id="episodes-per-day"
                        type="number"
                        min="0.1"
                        step="any"
                        value={show.episodesPerDay}
                        onChange={(e) =>
                            update("episodesPerDay", e.target.value)
                        }
                        style={inputStyle}
                    />
                </div>
            </div>

            <div
                style={{
                    marginTop: "24px",
                    padding: "18px",
                    borderRadius: "14px",
                    background: "#191a23",
                    border: "1px solid #343541",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "12px",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#c1c1cf",
                        }}
                    >
                        Your progress
                    </span>
                    <span
                        style={{
                            color: "#a99bff",
                            fontSize: "13px",
                            fontWeight: 700,
                        }}
                    >
                        {valid ? `${progress.toFixed(0)}%` : "—"}
                    </span>
                </div>

                <div
                    style={{
                        height: "7px",
                        background: "#343541",
                        borderRadius: "99px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            width: `${valid ? progress : 0}%`,
                            height: "100%",
                            borderRadius: "99px",
                            background:
                                "linear-gradient(90deg, #8171ff, #b6aaff)",
                            transition: "width 200ms ease",
                        }}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "12px",
                        marginTop: "9px",
                        color: "#898a9b",
                        fontSize: "12px",
                    }}
                >
                    <span>{valid ? `${watched} watched` : "—"}</span>
                    <span>{valid ? `${remaining} remaining` : "—"}</span>
                </div>
            </div>

            <div
                style={{
                    ...cardStyle,
                    marginTop: "14px",
                    background:
                        "linear-gradient(145deg, #28233e 0%, #20212b 75%)",
                    borderColor: "#494064",
                }}
            >
                {!valid ? (
                    <p
                        style={{
                            color: "#c1c1cf",
                            fontSize: "13px",
                            lineHeight: 1.6,
                            margin: 0,
                        }}
                    >
                        Enter a show name and valid episode counts to calculate
                        your finish date. Your last-watched episode must be
                        between zero and the total episode count.
                    </p>
                ) : (
                    <>
                        <p
                            style={{
                                margin: "0 0 6px",
                                color: "#b6aaff",
                                fontSize: "12px",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                            }}
                        >
                            {remaining === 0
                                ? "Series complete"
                                : "Estimated finish date"}
                        </p>

                        <h3
                            style={{
                                margin: "0 0 6px",
                                fontSize: "clamp(21px, 5vw, 28px)",
                                lineHeight: 1.3,
                                letterSpacing: "-0.04em",
                                overflowWrap: "anywhere",
                            }}
                        >
                            {remaining === 0 ? "You've made it!" : formattedDate}
                        </h3>

                        <p
                            style={{
                                margin: 0,
                                color: "#c1c1cf",
                                fontSize: "13px",
                                lineHeight: 1.6,
                            }}
                        >
                            {remaining === 0
                                ? `${show.name} is all caught up.`
                                : `Watch ${remaining} more episode${remaining === 1 ? "" : "s"} over ${days} day${days === 1 ? "" : "s"} at ${perDay} episode${perDay === 1 ? "" : "s"} per day.`}
                        </p>

                        {remaining > 0 && (
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginTop: "18px",
                                }}
                            >
                                <div
                                    style={{
                                        ...cardStyle,
                                        flex: 1,
                                        minWidth: 0,
                                        padding: "12px",
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: "0 0 5px",
                                            color: "#9899aa",
                                            fontSize: "11px",
                                        }}
                                    >
                                        Episodes left
                                    </p>
                                    <strong style={{ fontSize: "23px" }}>
                                        {remaining}
                                    </strong>
                                </div>
                                <div
                                    style={{
                                        ...cardStyle,
                                        flex: 1,
                                        minWidth: 0,
                                        padding: "12px",
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: "0 0 5px",
                                            color: "#9899aa",
                                            fontSize: "11px",
                                        }}
                                    >
                                        Time remaining
                                    </p>
                                    <strong style={{ fontSize: "23px" }}>
                                        {days}{" "}
                                        <span
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            days
                                        </span>
                                    </strong>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            <footer
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "18px",
                    color: "#77788a",
                    fontSize: "11px",
                }}
            >
                <span>◉ Stored in this browser</span>
                <button
                    type="button"
                    onClick={() => {
                        setShow(DEFAULT_SHOW)
                    }}
                    style={{
                        border: "1px solid #343541",
                        borderRadius: "8px",
                        padding: "8px 11px",
                        background: "transparent",
                        color: "#b8b8c7",
                        fontSize: "12px",
                        cursor: "pointer",
                    }}
                >
                    Reset inputs
                </button>
            </footer>
        </section>
    )
}
