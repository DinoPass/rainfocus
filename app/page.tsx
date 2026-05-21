import Image from "next/image";
import WorkflowCard from "./components/WorkflowCard";
import styles from "./page.module.scss";

export default function Home() {
  const stepTwoCards = [
    {
      id: "attendee-registration-1",
      iconSrc: "/assets/logic-arrow.png",
      iconAlt: "Attendee registration",
      title: "Attendee Registration",
      description: "Start by creating a general registration workflow",
      variant: "default" as const,
      isInteractive: false,
    },
    {
      id: "attendee-registration-2",
      iconSrc: "/assets/logic-arrow.png",
      iconAlt: "Attendee registration",
      title: "Attendee Registration",
      description: "Start by creating a general registration workflow",
      variant: "default" as const,
      isInteractive: false,
    },
    {
      id: "attendee-registration-3",
      iconSrc: "/assets/logic-arrow.png",
      iconAlt: "Attendee registration",
      title: "Attendee Registration",
      description: "Start by creating a general registration workflow",
      variant: "default" as const,
      isInteractive: false,
    },
    {
      id: "add-registration-workflow",
      iconSrc: "/assets/add-circle-outline.png",
      iconAlt: "Add registration workflow",
      title: "Add Registration Workflow",
      description: "",
      variant: "add" as const,
      isInteractive: true,
    },
  ];

  const stepThreeCards = [
    {
      id: "attendee-portal",
      iconSrc: "/assets/computer.png",
      iconAlt: "Attendee portal",
      title: "Attendee Portal",
      description:
        "Manage the portal that attendees will see after they've registered for your event.",
      variant: "default" as const,
      isInteractive: false,
    },
  ];

  return (
    <div className={styles.container}>
      <aside className={styles.gutter}>
        <Image
          className={styles.gutterSmall}
          src="/assets/Small.png"
          alt="RainFocus mark"
          width={32}
          height={32}
        />
        <Image
          className={styles.gutterLogo}
          src="/assets/Logo.svg"
          alt="RainFocus Summit logo"
          width={32}
          height={32}
        />
        <span className={styles.initialAvatar}>FL</span>
      </aside>
      <nav className={styles.sidenav}>
        <div className={styles.sidenavHeader}>
          <h2 className={styles.sidenavTitle}>RainFocus Summit</h2>
          <p className={styles.sidenavMeta}>Lehi, UT • December 15th</p>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <button className={styles.navButton} type="button">
              <span className={styles.navDot} aria-hidden="true" />
              <span className={styles.navLabel}>Guide</span>
            </button>
          </li>
          <li className={styles.navListItem}>
            <button className={styles.navButtonActive} type="button">
              <span className={styles.navDotActive} aria-hidden="true" />
              <span className={styles.navLabelActive}>Attendees</span>
            </button>
            <ul className={styles.subnavList}>
              <li className={styles.subnavItem}>Attendees</li>
              <li className={styles.subnavItem}>Attendee types</li>
              <li className={styles.subnavItem}>Packages</li>
              <li className={styles.subnavItem}>Reg codes</li>
              <li className={styles.subnavItem}>Discounts</li>
            </ul>
          </li>
          <li className={styles.navListItem}>
            <button className={styles.navButton} type="button">
              <span className={styles.navDot} aria-hidden="true" />
              <span className={styles.navLabel}>Content</span>
            </button>
          </li>
          <li className={styles.navListItem}>
            <button className={styles.navButton} type="button">
              <span className={styles.navDot} aria-hidden="true" />
              <span className={styles.navLabel}>Exhibitors</span>
            </button>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.eventHeader}>
          <Image
            className={styles.eventLogo}
            src="/assets/Logo.svg"
            alt="RainFocus mark"
            width={95}
            height={95}
          />
          <div className={styles.eventHeading}>
            <h3 className={styles.eventTitle}>RainFocus Summit</h3>
            <p className={styles.eventDate}>December 15th</p>
            <p className={styles.eventLocation}>Lehi, Utah</p>
          </div>
          <button className={styles.editEventButton}>Edit event</button>
        </div>
          <h2 className={styles.eventSetup}>Event setup guide</h2>
          <p className={styles.eventSetupInfo}>See the available list of modules below. We suggest that you start with the attendee module.</p>
        <div className={styles.sectionDivider} />
        <section className={styles.attendeeSection}>
          <div className={styles.attendeeHeader}>
            <Image
              className={styles.attendeeIcon}
              src="/assets/person-portal.png"
              alt="Attendee"
              width={35}
              height={35}
            />
            <h3 className={styles.attendeeTitle}>Attendee</h3>
          </div>

          <p className={styles.stepLabel}>
            <strong>Step 1:</strong> Base settings.
          </p>

          <div className={styles.stepOneCard}>
            <div className={styles.stepOneColumn}>
              <h4 className={styles.stepOneHeading}>General</h4>
              <p className={styles.stepOneText}>Define attendee types &amp; attributes</p>
            </div>
            <div className={styles.stepOneColumn}>
              <h4 className={styles.stepOneHeading}>Title</h4>
              <p className={styles.stepOneText}>
                Description that explains the value goes here. Description that explains the value goes here.
              </p>
            </div>
            <div className={styles.stepOneColumn}>
              <h4 className={styles.stepOneHeading}>Title</h4>
              <p className={styles.stepOneText}>
                Description that explains the value goes here. Description that explains the value goes here.
              </p>
            </div>
          </div>

          <p className={styles.stepLabel}>
            <strong>Step 2:</strong> Build registration workflows.
          </p>

          <div className={styles.workflowGrid}>
            {stepTwoCards.map((card) => (
              <WorkflowCard
                key={card.id}
                iconSrc={card.iconSrc}
                iconAlt={card.iconAlt}
                title={card.title}
                description={card.description}
                variant={card.variant}
                isInteractive={card.isInteractive}
              />
            ))}
          </div>

          <p className={styles.stepLabel}>
            <strong>Step 3:</strong> Design post-registration experiences.
          </p>

          <div className={styles.workflowGrid}>
            {stepThreeCards.map((card) => (
              <WorkflowCard
                key={card.id}
                iconSrc={card.iconSrc}
                iconAlt={card.iconAlt}
                title={card.title}
                description={card.description}
                variant={card.variant}
                isInteractive={card.isInteractive}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
