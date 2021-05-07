import "@workday/canvas-kit-css/index.scss";

function App() {
  return (
    <form>
      <fieldset>
        <legend>Fruit juice size</legend>
        <p>
          <input type="radio" name="size" id="size_1" value="small" />
          <label htmlFor="size_1">Small</label>
        </p>
        <p>
          <input type="radio" name="size" id="size_2" value="medium" />
          <label htmlFor="size_2">Medium</label>
        </p>
        <p>
          <input type="radio" name="size" id="size_3" value="large" />
          <label htmlFor="size_3">Large</label>
        </p>
      </fieldset>
    </form>
  );
}

export default App;
