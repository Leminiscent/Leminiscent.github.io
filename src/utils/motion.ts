// Simplified motion utility functions to avoid dependency on Framer Motion
export const motion = {
  div: (props: any) => {
    const { children, initial, animate, transition, custom, ...rest } = props;

    // Create a standard div with the rest of the props
    const div = document.createElement('div');
    Object.assign(div, rest);

    // Return the children unwrapped
    return props.children;
  }
};