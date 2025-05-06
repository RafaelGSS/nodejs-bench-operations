## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,723,838|27373715|
|(short string) (true) String#slice and strict comparison|61,211,158|30618463|
|(long string) (true) String#endsWith|51,091,884|25545970|
|(long string) (true) String#slice and strict comparison|57,301,626|28652449|
|(short string) (false) String#endsWith|59,785,847|29898605|
|(short string) (false) String#slice and strict comparison|62,691,140|31345578|
|(long string) (false) String#endsWith|54,760,897|27380566|
|(long string) (false) String#slice and strict comparison|57,821,920|28927726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:08:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27373715,"opsSec":54723838.4437992},{"name":"(short string) (true) String#slice and strict comparison","samples":30618463,"opsSec":61211158.6730673},{"name":"(long string) (true) String#endsWith","samples":25545970,"opsSec":51091884.51421342},{"name":"(long string) (true) String#slice and strict comparison","samples":28652449,"opsSec":57301626.53553783},{"name":"(short string) (false) String#endsWith","samples":29898605,"opsSec":59785847.10189981},{"name":"(short string) (false) String#slice and strict comparison","samples":31345578,"opsSec":62691140.954126164},{"name":"(long string) (false) String#endsWith","samples":27380566,"opsSec":54760897.623358175},{"name":"(long string) (false) String#slice and strict comparison","samples":28927726,"opsSec":57821920.72124223}]}-->
