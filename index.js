const CONVERT_BTN = document.getElementById("convertBtn");
const LENGTH_RESULT = document.getElementById("lengthResult");
const VOLUME_RESULT = document.getElementById("volumeResult");
const MASS_RESULT = document.getElementById("massResult");
const INPUT = document.getElementById("input");

INPUT.addEventListener("input", function handleConvert() {
  const INPUT_VALUE = document.getElementById("input").value;
  const METER_TO_FEET = (INPUT_VALUE * 3.281).toFixed(2);
  const FEET_TO_METER = (INPUT_VALUE / 3.281).toFixed(2);
  const LITER_TO_GALLON = (INPUT_VALUE * 0.264).toFixed(2);
  const GALLON_TO_LITER = (INPUT_VALUE / 0.264).toFixed(2);
  const KILO_TO_POUND = (INPUT_VALUE * 2.204).toFixed(2);
  const POUND_TO_KILO = (INPUT_VALUE / 2.204).toFixed(2);

  LENGTH_RESULT.innerHTML = `${INPUT_VALUE} meters = ${METER_TO_FEET} feet | ${INPUT_VALUE} feet = ${FEET_TO_METER} meters`;
  VOLUME_RESULT.innerHTML = `${INPUT_VALUE} liters = ${LITER_TO_GALLON} gallons | ${INPUT_VALUE} gallons = ${GALLON_TO_LITER} liters`;
  MASS_RESULT.innerHTML = `${INPUT_VALUE} kilos = ${KILO_TO_POUND} pounds | ${INPUT_VALUE} pounds = ${POUND_TO_KILO} kilos`;
});
