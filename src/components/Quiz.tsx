import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface QuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (selected: number) => {
    if (selected === questions[current].correct) setScore(score + 1);
    setAnswers([...answers, selected]);
    if (current < questions.length - 1) setCurrent(current + 1);
    else onComplete(score + (selected === questions[current].correct ? 1 : 0));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Pergunta {current + 1}/{questions.length}</h3>
      <p className="mb-4">{questions[current].question}</p>
      <ul className="space-y-2">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="w-full text-left p-3 border rounded hover:bg-primary-100"
          >
            {opt}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;