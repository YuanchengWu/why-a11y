import "@workday/canvas-kit-css-radio/index.scss";
import "@workday/canvas-kit-css-form-field/index.scss";

export function Form(): JSX.Element {
  return (
    <form className="wdc-form">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Fruit juice size</legend>
        <div className="wdc-form-group-fields">
          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="size" id="size_1" value="small" />
              <label htmlFor="size_1">Small</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="size" id="size_2" value="medium" />
              <label htmlFor="size_2">Medium</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="size" id="size_3" value="large" />
              <label htmlFor="size_3">Large</label>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
