// custom.d.ts или svg.d.ts
declare module '*.svg' {
	import { ReactElement } from 'react';
	const content: ReactElement;
	export default content;
}
