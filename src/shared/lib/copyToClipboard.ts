export const copyToClipboard = async (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Failed to copy text to clipboard: ", error);
    }
  } else {
    console.warn("Clipboard API is not supported on this browser.");
  }
};
