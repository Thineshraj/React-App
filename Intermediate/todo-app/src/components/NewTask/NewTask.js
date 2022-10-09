import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../hooks/use-http';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const enterTaskHandler = async (taskText) => {
    const transformTasks = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };

    sendTaskRequest(
      {
        url: 'https://udemy-todo-customhook-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      transformTasks
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
