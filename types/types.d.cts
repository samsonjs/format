declare const format: {
  (fmt: string, ...args: unknown[]): string;
  format: typeof format;
  printf(fmt: string, ...args: unknown[]): void;
  // Arrays and single replacement values are both supported.
  vsprintf(fmt: string, replacements: unknown): string;
};

export = format;
