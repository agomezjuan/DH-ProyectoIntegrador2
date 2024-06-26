import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: '20px'
  },
  section: {
    padding: 20,
    flexGrow: 1,
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    border: '3px solid #557824'
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  header: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#557824'
  },
  content: {
    fontSize: 12,
    marginBottom: 5
  },
  image: {
    width: '100%',
    objectFit: 'contain'
  }
});

const PlanPDF = ({ planner }) => {
  const days = {
    sunday: 'Domingo',
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado'
  };

  return (
    <Document>
      {Object.keys(planner)
        .filter((day) => Object.keys(days).includes(day))
        .map((day) => (
          <Page size='A4' key={day} style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>{days[day].toUpperCase()}</Text>
              <Text style={styles.header}>{planner[day].recipe?.name}</Text>
              <Text style={styles.content}>
                Tiempo de preparación: {planner[day].recipe?.preparationTime}
              </Text>

              <Text
                style={[
                  styles.content,
                  { fontWeight: 'black', marginTop: 20 }
                ]}>
                Ingredientes:
              </Text>
              {planner[day].recipe?.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.content}>
                  - {ingredient}
                </Text>
              ))}
              <Text
                style={[
                  styles.content,
                  { fontWeight: 'black', marginTop: 20 }
                ]}>
                Pasos de preparación:
              </Text>
              {planner[day].recipe?.preparationSteps.map((step, index) => (
                <Text key={index} style={styles.content}>
                  {index + 1}. {step}
                </Text>
              ))}
            </View>
          </Page>
        ))}
    </Document>
  );
};

PlanPDF.propTypes = {
  planner: PropTypes.object
};

export default PlanPDF;
