import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;
