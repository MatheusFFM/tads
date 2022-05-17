<template>
  <div>
    <v-row class="mt-3 mb-14">
      <v-col cols="2" />
      <v-col cols="8">
        <H2Atom>Calendar</H2Atom>
        <CalendarOrganism :props="getCalendar()" class="mt-8" />
      </v-col>
      <v-col cols="2" />
    </v-row>
  </div>
</template>

<script lang="ts">
import ICalendarProps from '@/models/components/ICalendarProps';
import { Component, Vue, Prop } from 'vue-property-decorator';
import CalendarOrganism from '../organisms/CalendarOrganism.vue';
import H2Atom from '@/components/atoms/H2Atom.vue';

@Component({
  components: {
    CalendarOrganism,
    H2Atom,
  },
})
export default class CalendarTemplate extends Vue {
  @Prop()
  public props!: ICalendarProps;

  public getCalendar(): ICalendarProps {
    return {
      id: `${this.props.id}-list`,
      tasks: this.props.tasks,
    };
  }
}
</script>
