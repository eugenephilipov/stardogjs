let rules = [{
	"condition": function(R) {
		R.when(this && (this.transactionTotal < 500));
	},
	"consequence": function(R) {
		this.result = false;
		R.stop();
	}
}];
export {rules};