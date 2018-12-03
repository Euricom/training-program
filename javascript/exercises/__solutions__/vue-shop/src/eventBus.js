import Vue from 'vue';

/* Simple Event Bus
 * use:
 *    // in component A
 *    eventBus.$emit('resourceAdded', resoure)
 *
 *    // in component B
 *    eventBus.$on('resourceAdded', (resource) => {
 *      console.log('the resource is added', resource)
 *    })
 */
// eslint-disable-next-line import/prefer-default-export
export const eventBus = new Vue();
