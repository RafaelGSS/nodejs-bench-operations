## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|90,133,132|45112841|
|(short string) (true) String#slice and strict comparison|58,446,728|29284918|
|(long string) (true) String#endsWith|63,449,769|31725819|
|(long string) (true) String#slice and strict comparison|53,441,081|26720559|
|(short string) (false) String#endsWith|95,288,082|47644053|
|(short string) (false) String#slice and strict comparison|59,666,783|29836695|
|(long string) (false) String#endsWith|87,888,172|43992956|
|(long string) (false) String#slice and strict comparison|53,592,126|26796117|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:11:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45112841,"opsSec":90133132.75848478},{"name":"(short string) (true) String#slice and strict comparison","samples":29284918,"opsSec":58446728.13691029},{"name":"(long string) (true) String#endsWith","samples":31725819,"opsSec":63449769.91187426},{"name":"(long string) (true) String#slice and strict comparison","samples":26720559,"opsSec":53441081.01877194},{"name":"(short string) (false) String#endsWith","samples":47644053,"opsSec":95288082.74970782},{"name":"(short string) (false) String#slice and strict comparison","samples":29836695,"opsSec":59666783.45506872},{"name":"(long string) (false) String#endsWith","samples":43992956,"opsSec":87888172.26672755},{"name":"(long string) (false) String#slice and strict comparison","samples":26796117,"opsSec":53592126.0654581}]}-->
