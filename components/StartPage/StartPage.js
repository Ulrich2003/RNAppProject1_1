import React from 'react';

import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const StartPage = () => {
  return (
    <ScrollView>
      <Header />
      <View>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
