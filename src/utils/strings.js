export const cutSentence = (sentence) => {
  if (sentence.length <= 3) {
    return sentence;
  }
  return sentence.split(" ").slice(0, 3).join(" ") + "...";
}
