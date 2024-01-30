import css from './HeroHeader.module.css';

function HeroHeader() {
  return (
    <header className={css.header}>
      <div className={css.header__nav}>
        <div className={css.header__logo}>
          <div className={css.header__logoImage}></div>
          <span className={css.header__logoText}>ce</span>
        </div>
        <div className={css.header__menuButton}></div>
      </div>

      <p className={css.header__title}>
        ice cream made with{' '}
        <span className={css.header__titlePassion}>passion</span>
      </p>
      <div className={css.header__links}>
        <button className={css.header__productsButton}>Products</button>
        <p className={css.header__paragraph} href=".">
          How it’s made?
        </p>
      </div>
      <div className={css.header__images}>
        <div className={css.header__imagesLeft}></div>
        <div className={css.header__imagesBigIcecream}></div>
        <div className={css.header__imagesRight}></div>
      </div>
    </header>
  );
}

export default HeroHeader;
