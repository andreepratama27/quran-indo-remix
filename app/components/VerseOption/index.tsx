interface VerseOptionProps {
  playing: boolean;
  onPause: () => void;
  onPlay: () => void;
}
export default function VerseOption({
  playing,
  onPause,
  onPlay,
}: VerseOptionProps) {
  return (
    <div className="option">
      <ul className="flex items-center gap-4">
        {/* <li>
          <p className="text-violet-600">Share</p>
        </li> */}
        <li>
          {playing ? (
            <button className="text-violet-600" onClick={onPause}>
              Stop
            </button>
          ) : (
            <button className="text-violet-600" onClick={onPlay}>
              Play
            </button>
          )}
        </li>
        <li>
          <p className="text-violet-600">
            <button className="flex items-center">
              <img src="/bookmark.png" alt="bookmark" className="w-4 h-4" />
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
}
