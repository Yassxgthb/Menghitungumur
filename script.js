document.getElementById('age-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const dobInput = document.getElementById('dob').value;
  const dob = new Date(dobInput);

  if (!dobInput) {
    alert('Mohon masukkan tanggal lahir');
    return;
  }

  const today = new Date();
  const ageInMilliseconds = today - dob;

  // Menghitung umur
  const ageDate = new Date(ageInMilliseconds);
  const years = ageDate.getUTCFullYear() - 1970; // Tahun
  const months = ageDate.getUTCMonth(); // Bulan
  const days = ageDate.getUTCDate() - 1; // Hari

  // Menghitung jumlah hari hidup
  const daysLived = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

  // Menghitung ulang tahun berikutnya
  let nextBirthday = new Date(dob);
  nextBirthday.setFullYear(today.getFullYear());

  if (nextBirthday <= today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const nextBirthdayDate = nextBirthday;
  const timeToNextBirthday = nextBirthdayDate - today;

  const nextBirthdayMonth = Math.floor(timeToNextBirthday / (1000 * 60 * 60 * 24 * 30));
  const nextBirthdayDay = Math.floor((timeToNextBirthday % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

  // Format tanggal untuk menampilkan hari dalam bahasa Indonesia
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const nextBirthdayFormatted = nextBirthdayDate.toLocaleDateString('id-ID', options);

  // Menampilkan hasil
  const ageText = `Umur Anda adalah ${years} Tahun, ${months} Bulan, dan ${days} Hari`;
  const daysLivedText = `Anda telah hidup selama ${daysLived} hari`;
  const nextBirthdayText = `Ulang Tahun Anda berikutnya adalah ${nextBirthdayFormatted} (${nextBirthdayMonth} bulan, ${nextBirthdayDay} hari lagi)`;

  document.getElementById('age').textContent = ageText;
  document.getElementById('days-lived').textContent = daysLivedText;
  document.getElementById('next-birthday').textContent = nextBirthdayText;

  // Menampilkan hasil dengan animasi
  const result = document.getElementById('result');
  result.classList.remove('hidden');
  result.classList.add('fade-in');
});
