import { render, screen, fireEvent } from '@testing-library/react';
import Timer from '../../components/timer/Timer';
import { useTimer } from '../../contexts/TimerContext'

jest.mock('../../contexts/TimerContext', () => {
  return {
    ...jest.requireActual('../../contexts/TimerContext'),
    useTimer: jest.fn(),
  }});

beforeEach(() => {
  useTimer.mockReturnValue({
    currentKey: 0,
    options: [
      {
        duration: 60,
        type: "learn"
      },
      {
        duration: 60,
        type: "rest"
      }
    ]
  })

  render(<Timer/>)
});

test('Render Timer with start btn', () => {
  const startButton = screen.getByRole('button');

  expect(startButton).toHaveTextContent(/start/i);
});

test('Click on start button', () => {
  const startButton = screen.getByRole('button');

  fireEvent.click(startButton);

  expect(startButton).toHaveTextContent(/stop/i);
});