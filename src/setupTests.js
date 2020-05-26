import '@testing-library/jest-dom/extend-expect';
// eslint-disable-next-line import/no-unresolved
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;
