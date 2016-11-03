import app from './app';

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`Boletinho running on port ${PORT}`);
});
