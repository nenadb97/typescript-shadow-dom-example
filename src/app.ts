function appendElements(parent: HTMLElement | ShadowRoot, elements: Array<HTMLElement | HTMLStyleElement>): void {
    elements.forEach(element => parent.appendChild(element));
}

function createElement(element: string, properties: {}): HTMLElement | HTMLStyleElement {
    return Object.assign(document.createElement(element), properties);
}

// Create CSS on DOM level
const style: HTMLStyleElement = createElement('style', {
    type: 'text/css',
    innerText : `
    p {
        background: red;
        font-size: 27px;
    }
`
}) as HTMLStyleElement;

appendElements(document.body, [style]);

// Get app wrapper 
const app: HTMLElement = document.getElementById('app') as HTMLElement;

// Create element on DOM level
const domLevelElement: HTMLElement = createElement('p', { innerHTML: 'DOM LEVEL RED PARAGRAPH' });


// Create wrapper for first component
const component1Wrapper: HTMLElement = createElement('div', {id: 'componentOne'});


// Create wrapper for second component
const component2Wrapper: HTMLElement = createElement('div', { id: 'componentTwo'});

appendElements(app, [domLevelElement, component1Wrapper, component2Wrapper]);

// Create shadow root for fisrt component
const component1ShadowRoot: ShadowRoot = component1Wrapper.attachShadow({mode: 'open'});

// Create content for first component
const component1Paragraph: HTMLElement = createElement('p', { innerHTML: 'FIRST SHADOW DOM COMPONENT GREEN PARAGRAPH' });


// Create style for first component
const component1Style: HTMLStyleElement = createElement('style', {
    innerText: ` 
    p {
        background: green;
        font-size: 30px;
    }`
}) as HTMLStyleElement;


// Append elements to fisrt shadow DOM
appendElements(component1ShadowRoot, [component1Paragraph, component1Style]);


// Create shadow root for second component
const component2ShadowRoot: ShadowRoot = component2Wrapper.attachShadow({mode: 'open'});

// Create content for second component
const component2Paragraph: HTMLElement = createElement('p', { innerHTML: 'SECOND SHADOW DOM COMPONENT BLUE PARAGRAPH' });

// Create style for SECOND component
const component2Style: HTMLStyleElement = createElement('style', {
    innerText: `
    p {
        background: blue;
        font-size: 33px;
    }
    `
}) as HTMLStyleElement;


// Append elements to second shadow DOM
appendElements(component2ShadowRoot, [component2Paragraph, component2Style]);

