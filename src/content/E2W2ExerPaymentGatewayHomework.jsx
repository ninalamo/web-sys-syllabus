export default function E2W2ExerPaymentGatewayHomework() {
  return (
    <div className="page-content">
      <h1>Take-Home Mission: "The Payment Gateway Swap"</h1>
      <p>
      <strong>Due:</strong> Next session
      <br /><strong>Format:</strong> Individual submission
      </p>
      
      <h2>Instructions</h2>
      
      <br />Build a <code>CheckoutService</code> that requires an <code>IPaymentProvider</code>.
      
      
      <ol>
        <li>Create two implementations: <code>GCashProvider</code> and <code>CreditCardProvider</code>.</li>
        <li>In your <code>Program.cs</code>, ask the user "Press 1 for GCash, 2 for Credit Card".</li>
        <li><strong>The Catch:</strong> Inject the chosen provider into <code>CheckoutService</code>. <code>CheckoutService</code> must not have any <code>if</code> statements checking which payment method was chosen.</li>
      
      </ol>
      
      <h3>Rubric</h3>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Correct interface definition</td>
        <td>25%</td>
      </tr>
      
      <tr>
        <td>Two implementations</td>
        <td>25%</td>
      </tr>
      
      <tr>
        <td>Constructor injection only (no <code>new</code>)</td>
        <td>25%</td>
      </tr>
      
      <tr>
        <td>No <code>if</code> statements in CheckoutService</td>
        <td>25%</td>
      </tr>
      </tbody></table>
    </div>
  )
}
