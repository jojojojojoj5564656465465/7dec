const icons = {
	instagram: (
		<svg
			role='img'
			width='30'
			height='30'
			aria-label='instagram'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 50 50'
		>
			<path d='M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.086 0 11 4.914 11 11v18c0 6.086-4.914 11-11 11H16C9.914 45 5 40.086 5 34V16C5 9.914 9.914 5 16 5zm21 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-12 3c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9z' />
		</svg>
	),
	facebook: (
		<svg role='img' width='30' height='30' aria-label='facebook' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 50'>
			<path d='M25 3C12.862 3 3 12.862 3 25c0 11.02 8.128 20.138 18.713 21.729l1.148.173V29.566h-5.197v-3.52h5.197v-4.673c0-2.878.691-4.774 1.834-5.963 1.144-1.19 2.833-1.789 5.184-1.789 1.88 0 2.611.114 3.307.2v2.88h-2.448a3.59 3.59 0 0 0-3.119 1.807c-.591 1.032-.775 2.264-.775 3.52v4.017h6.123l-.545 3.52h-5.578V46.93l1.135-.155C38.714 45.32 47 36.127 47 25c0-12.138-9.862-22-22-22zm0 2c11.058 0 20 8.942 20 20 0 9.73-6.964 17.732-16.156 19.533V31.564h5.293l1.162-7.52h-6.455v-2.017c0-1.037.19-1.967.51-2.525.32-.558.628-.8 1.384-.8h4.448V12.01l-.868-.117c-.6-.082-1.969-.272-4.44-.272-2.702 0-5.022.736-6.624 2.402-1.602 1.666-2.393 4.147-2.393 7.35v2.674h-5.197v7.52h5.197V44.47C11.817 42.555 5 34.624 5 25 5 13.942 13.942 5 25 5z' />
		</svg>
	),
	tripAdvisor: (
		<svg
			role='img'
			aria-label='trip advisor'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 50 50'
			width='30'
			height='30'
		>
			<path d='M25 11c-5.832 0-11.156 1.512-15.21 4H2s1.754 2.152 2.578 4.578A11.952 11.952 0 0 0 2 27c0 6.629 5.371 12 12 12 3.496 0 6.637-1.508 8.828-3.895L25 38l2.172-2.895C29.363 37.492 32.504 39 36 39c6.629 0 12-5.371 12-12 0-2.805-.969-5.379-2.578-7.422C46.246 17.152 48 15 48 15h-7.797c-4.055-2.488-9.375-4-15.203-4Zm0 2c3.883 0 7.586.707 10.8 2.012A11.99 11.99 0 0 0 25 22.215a11.985 11.985 0 0 0-10.828-7.203l.07-.024C17.453 13.7 21.145 13 25 13Zm-11 4c5.523 0 10 4.477 10 10s-4.477 10-10 10S4 32.523 4 27s4.477-10 10-10Zm22 0c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10Zm-22 4c-3.313 0-6 2.688-6 6 0 3.313 2.688 6 6 6 3.313 0 6-2.688 6-6 0-3.313-2.688-6-6-6Zm22 0c-3.313 0-6 2.688-6 6 0 3.313 2.688 6 6 6 3.313 0 6-2.688 6-6 0-3.313-2.688-6-6-6Zm-22 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4Zm22 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4Zm-22 2a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm22 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Z' />
		</svg>
	),
	whatsApp: (
		<svg role='img' aria-label='whatsapp' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='30' height='30'>
			<path d='M25 2C12.31 2 2 12.31 2 25c0 4.08 1.119 7.886 2.984 11.209L2.037 46.73a1 1 0 0 0 1.203 1.24l10.97-2.718C17.436 46.972 21.094 48 25 48c12.69 0 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21c-3.722 0-7.208-.97-10.238-2.666a1 1 0 0 0-.729-.098l-9.607 2.381 2.576-9.191a1 1 0 0 0-.1-.78A20.88 20.88 0 0 1 4 25C4 13.39 13.39 4 25 4zm-8.357 9c-.641 0-1.557.238-2.309 1.049-.452.487-2.334 2.32-2.334 5.545 0 3.361 2.331 6.262 2.613 6.635h.002v.001a31.669 31.669 0 0 0 3.004 3.684c1.804 1.899 4.34 4.093 7.486 5.436 1.45.617 2.593.99 3.46 1.261 1.605.504 3.067.428 4.165.266.823-.121 1.727-.516 2.622-1.082.894-.566 1.771-1.27 2.158-2.34a8.25 8.25 0 0 0 .469-2.059 4.72 4.72 0 0 0 .01-.787c-.02-.238 0-.42-.221-.785-.466-.764-.993-.784-1.543-1.056a183.29 183.29 0 0 0-2.05-.993c-.871-.415-1.626-.783-2.091-.949-.294-.106-.652-.258-1.17-.199-.517.059-1.029.432-1.326.873-.282.418-1.418 1.758-1.764 2.152-.004-.002.026.011-.111-.056-.428-.212-.952-.392-1.727-.801a14.283 14.283 0 0 1-2.804-1.947v-.002c-1.579-1.39-2.685-3.135-3.034-3.721.024-.028-.002.006.047-.043l.002-.002c.357-.351.673-.77.94-1.078.378-.436.545-.82.726-1.18.361-.716.16-1.503-.049-1.918v-.002c.015.029-.112-.252-.25-.576l-.5-1.195c-.374-.898-.792-1.906-1.04-2.496v-.002c-.293-.695-.69-1.196-1.208-1.438-.518-.241-.975-.173-.994-.174h-.002A26.2 26.2 0 0 0 16.643 13zm0 2c.385 0 .765.005 1.084.02.327.016.307.017.244-.012-.064-.03.023-.04.209.402.243.578.663 1.59 1.039 2.49.188.451.363.874.504 1.205.14.332.216.517.304.694v.002l.002.002c.087.17.08.061.05.12-.212.42-.24.522-.454.768-.325.375-.657.792-.832.965-.154.151-.43.386-.604.846-.173.46-.092 1.093.186 1.564.37.629 1.59 2.613 3.484 4.282a16.35 16.35 0 0 0 3.194 2.216c.888.469 1.611.743 1.773.823.385.19.805.338 1.293.279.489-.059.91-.355 1.178-.658l.002-.002c.357-.405 1.417-1.615 1.926-2.361.021.007.014.001.183.062v.002h.002c.077.027 1.044.46 1.906.871.863.41 1.738.838 2.022.979.41.203.604.335.654.336a2.35 2.35 0 0 1-.006.328 6.365 6.365 0 0 1-.357 1.552c-.105.292-.654.893-1.346 1.33-.692.438-1.534.748-1.846.793-.937.139-2.05.189-3.273-.195a33.421 33.421 0 0 1-3.273-1.193c-2.776-1.184-5.135-3.198-6.82-4.973a29.716 29.716 0 0 1-1.999-2.338c-.48-.623-.688-.948-.863-1.178l-.002-.001c-.31-.41-2.207-3.05-2.207-5.426 0-2.516 1.168-3.503 1.8-4.184.333-.358.696-.41.843-.41z' />
		</svg>
	),
	tiktok: (
		<svg role='img' aria-label='tiktok' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
			<path d='M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5H9zm0 2h32c1.672 0 3 1.328 3 3v32c0 1.672-1.328 3-3 3H9a2.98 2.98 0 0 1-3-3V9c0-1.672 1.328-3 3-3zm17.043 4a1 1 0 0 0-1 .998l-.022 9.762-.015 6.73L25 30.594c0 1.815-1.649 3.299-3.527 3.299a3.337 3.337 0 0 1-3.352-3.354 3.335 3.335 0 0 1 3.352-3.352c.063 0 .19.021.408.047A1 1 0 0 0 23 26.24v-4.2a1 1 0 0 0-.938-.999c-.155-.01-.351-.03-.59-.03-5.249 0-9.527 4.279-9.527 9.528 0 5.25 4.278 9.527 9.528 9.527 5.249 0 9.527-4.277 9.527-9.527V21.49c1.455 1.164 3.268 1.9 5.27 1.9.273 0 .532-.016.78-.038a1 1 0 0 0 .909-.997v-4.67a1 1 0 0 0-.928-.997 6.478 6.478 0 0 1-5.978-5.792 1 1 0 0 0-.994-.896h-4.016zm.998 2h2.281a8.35 8.35 0 0 0 6.637 6.445v2.866c-2.139-.11-4.018-1.176-5.123-2.858a1 1 0 0 0-1.836.55V30.54a7.513 7.513 0 0 1-7.527 7.527 7.513 7.513 0 0 1-7.528-7.527c0-4 3.121-7.176 7.055-7.432v2.176c-2.714.253-4.879 2.48-4.879 5.256 0 2.944 2.407 5.354 5.352 5.354 2.929 0 5.527-2.307 5.527-5.3l.006-3.099.015-6.73.02-8.764z' />
		</svg>
	),
}

export default icons
