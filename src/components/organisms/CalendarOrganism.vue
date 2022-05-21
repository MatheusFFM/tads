<template>
  <div>
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-0 mr-10 select-types"
        label="type"
      />
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-0 select-weekdays"
      />
      <v-spacer />
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
      />
    </v-sheet>
  </div>
</template>

<script lang="ts">
import ICalendarProps from '@/models/components/ICalendarProps';
import IEvent from '@/models/interface/IEvent';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CalendarOrganism extends Vue {
  @Prop()
  public props!: ICalendarProps;
  public events: IEvent[] = [];
  public type = 'month';
  public types = ['month', 'week', 'day', '4day'];
  public mode = 'stack';
  public weekday = [0, 1, 2, 3, 4, 5, 6];
  public weekdays = [
    { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
    { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
    { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
    { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
  ];
  public value = '';

  public getEvents() {
    const events: IEvent[] = [];

    for (const task of this.props.tasks.filter((t) => !t.done)) {
      events.push({
        name: task.title,
        start: new Date(task.date),
        end: new Date(task.date),
        color: task.color,
        timed: false,
      });
    }

    this.events = events;
  }

  public getEventColor(event: IEvent) {
    return event.color;
  }
}
</script>
