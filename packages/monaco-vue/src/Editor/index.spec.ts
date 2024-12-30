import Editor from './Editor.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

describe('<Editor />', () => {
  it('should check render with snapshot', () => {
    const component = shallowMount(Editor);

    expect(component).toMatchSnapshot();
  });
});
