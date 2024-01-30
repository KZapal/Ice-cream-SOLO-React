import css from './App.module.css';
import HeroHeader from './HeroHeader/HeroHeader';
import Products from './Products/Products';

export const App = () => {
  return (
    <div className={css.main}>
      <HeroHeader />
      <Products />
    </div>
  );
};
