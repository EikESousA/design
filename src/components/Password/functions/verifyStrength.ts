export default function verifyStrength(value: string): number {
  let strength = 0;

  if (value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
  }

  if (value.match(/([0-9])/)) {
    strength += 1;
  }

  if (value.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    strength += 1;
  }

  if (value.length > 7) {
    strength += 1;
  }

  return strength;
}
