import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import classNames from 'classnames';

import styles from './Welcome.module.scss';

const Welcome: FC = () => {
  const prompt = 'npx gravx create-project your-project-name';

  const [email, setEmail] = useState<string>('');

  const handleOnClick = () => {
    navigator.clipboard.writeText(prompt);
    alert('Code copied to clipboard');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email.');
      return;
    }
    alert(`Thanks! We will contact you at ${email} with pricing info.`);
    setEmail('');
  };

  return (
    <section className={styles.Welcome} aria-label="Welcome section">
      <div className={styles.Cards}>
        <div className={classNames(styles.Glass, styles.WelcomeCard)}>
          <h1 className={styles.Title}>
            Welcome to <span>GravX</span>
          </h1>
          <p className={styles.Subtitle}>
            Your starting point for building modern, fast, and elegant applications. Explore,
            experiment, and take your ideas to the next level with our framework.
          </p>
          <div className={styles.Actions}>
            <a
              href="https://github.com/rafabarranco/gravx"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.Button}
              aria-label="Open GravX on GitHub"
            >
              GravX on GitHub
            </a>
            <a href="/docs" className={styles.ButtonAlt} aria-label="See documentation">
              See Docs
            </a>
          </div>
          <div className={styles.CodeWrapper}>
            <div
              className={styles.Code}
              role="button"
              tabIndex={0}
              aria-label="Copy install command"
              onClick={() => handleOnClick()}
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') handleOnClick();
              }}
            >
              <code className={styles.CodePrompt}>{prompt}</code>
            </div>
          </div>
        </div>

        <div className={styles.Divider} aria-hidden="true" />

        <div className={styles.Glass} aria-label="Licensing plans">
          <h2 className={styles.Title}>
            <span>Licensing</span> Plans
          </h2>
          <p className={styles.Subtitle}>
            Choose the plan that fits your needs. Simple, transparent, and with no surprises.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li>
              <strong>🏢 Enterprise</strong> – Unlimited access for future-makers.
            </li>
            <li>
              <strong>🚀 Team Based</strong> – Collaboration for up to 5 people team.
            </li>
            <li>
              <strong>👨‍💻 Personal</strong> – Freedom to build your vision.
            </li>
          </ul>
          <form
            onSubmit={handleSubmit}
            className={styles.PricingForm}
            aria-label="Request pricing info"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              className={styles.PricingInput}
              required
              aria-label="Your email"
              aria-required="true"
              autoComplete="email"
            />
            <button
              type="submit"
              className={styles.PricingButton}
              aria-label="Request pricing information"
            >
              Request Pricing Info
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
