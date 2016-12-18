///test photocell - to give dark/dim/light/bright/very bright readings
int photocellPin = 0;     // the cell and 10K pulldown are connected to a0
int photocellReading;     // the analog reading from the analog resistor divider
 
void setup(void) {
  // We'll send debugging information via the Serial monitor
  Serial.begin(9600);   
}
 
void loop(void) {
  photocellReading = analogRead(photocellPin);  
 
  Serial.write("  photocell light reading = ");
  Serial.write(photocellReading);     // the raw analog reading
 
  // We'll have a few threshholds, qualitatively determined
  if (photocellReading < 10) {
    Serial.write(" - Dark;");
  } else if (photocellReading < 200) {
    Serial.write(" - Dim;");
  } else if (photocellReading < 500) {
    Serial.write(" - Light;");
  } else if (photocellReading < 800) {
    Serial.write(" - Bright;");
  } else {
    Serial.write(" - Very bright;");
  }
  delay(1000);
}
