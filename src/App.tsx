import GlobalStyles from './styles';
import Header from './components/Header/Header';
import MainPage from './pages/Main/MainPage';

// Main App
export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <MainPage />
    </div>
  );
}
