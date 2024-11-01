import { useEffect, useState } from "react";
import QuizTable from "./sections/QuizTable";
import TryQuizTable from "./sections/TryQuizTable";
import { getQuizzes } from "../../service/quizService";

type Props = {};

type Quiz = {
  id: number;
  title: string;
};

export default function Quiz({}: Props) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const quizzesReq = async () => {
      const res = await getQuizzes();
      setQuizzes([...res]);    
    };
    quizzesReq();
  }, []);
  return (
    <>
      <QuizTable  quizzes={quizzes}/>
      <TryQuizTable />
    </>
  );
}
