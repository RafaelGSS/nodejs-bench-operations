## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|86,774,638|43407721|
|(short string) (true) String#slice and strict comparison|56,676,285|28338150|
|(long string) (true) String#startsWith|65,723,527|32884525|
|(long string) (true) String#slice and strict comparison|51,870,903|25937088|
|(short string) (false) String#startsWith|93,177,251|46593356|
|(short string) (false) String#slice and strict comparison|56,056,658|28054265|
|(long string) (false) String#startsWith|84,029,676|42014842|
|(long string) (false) String#slice and strict comparison|50,986,198|25496964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:46:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43407721,"opsSec":86774638.48239425},{"name":"(short string) (true) String#slice and strict comparison","samples":28338150,"opsSec":56676285.717576},{"name":"(long string) (true) String#startsWith","samples":32884525,"opsSec":65723527.78150564},{"name":"(long string) (true) String#slice and strict comparison","samples":25937088,"opsSec":51870903.98337673},{"name":"(short string) (false) String#startsWith","samples":46593356,"opsSec":93177251.34096235},{"name":"(short string) (false) String#slice and strict comparison","samples":28054265,"opsSec":56056658.53159437},{"name":"(long string) (false) String#startsWith","samples":42014842,"opsSec":84029676.7734478},{"name":"(long string) (false) String#slice and strict comparison","samples":25496964,"opsSec":50986198.39035162}]}-->
