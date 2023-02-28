import { render, screen } from '@testing-library/react';
import Timer from '../../components/timer/Timer';

test('render Timer', () => {
  render(<Timer />);
  
  
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});