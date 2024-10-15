
import CalendarPage from './pages/Calendar';
import ErrorBoundary from './components/ErrorBoundary';  // Import the Error Boundary

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <CalendarPage />  {/* Wrap this component in ErrorBoundary */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
