declare class HardcoverWidget {
  constructor(
    element: HTMLElement | null,
    options: {
      apiUrl: string;
      username: string;
      bookType: string;
      maxWidth?: string;
      minColumnWidth?: number;
      gap?: number;
      padding?: number;
      columns?: number;
      showPoweredBy?: boolean;
    }
  );
}
