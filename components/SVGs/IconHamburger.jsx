import { bar1, bar2, revert } from '../../styles/Burger.module.scss';

export default function IconHamburger({ isBurgerOpen }) {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_160_768)">
        <path
          d="M2.41667 7C1.08198 7 0 8.08198 0 9.41667V9.41667C0 10.7514 1.08198 11.8333 2.41667 11.8333H41.0833C42.418 11.8333 43.5 10.7514 43.5 9.41667V9.41667C43.5 8.08198 42.418 7 41.0833 7H2.41667Z"
          fill="white"
          className={isBurgerOpen ? bar1 : revert}
        />
        <path
          d="M2.41667 19.8333C1.08198 19.8333 0 20.9153 0 22.25V22.25C0 23.5847 1.08198 24.6666 2.41667 24.6666H41.0833C42.418 24.6666 43.5 23.5847 43.5 22.25V22.25C43.5 20.9153 42.418 19.8333 41.0833 19.8333H2.41667Z"
          fill="white"
          className={isBurgerOpen ? bar2 : revert}
        />
      </g>
      <defs>
        <clipPath id="clip0_160_768">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
