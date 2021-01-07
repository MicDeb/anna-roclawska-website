import React from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarTable } from 'src/components/CalendarTable';
import { events } from 'src/components/eventsNew';
import { Helmet } from 'react-helmet';

export default function Calendar() {
  const { t } = useTranslation();
  return (
    <section className='section'>
      <Helmet title={`Anna Rocławska - Musiałczyk | ${ t('calendar') }`} />
      <CalendarTable
        eventsByYears={events}
      />
    </section>
  );
}
