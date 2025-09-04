## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,000,940|42000479|
|(short string) (true) String#slice and strict comparison|62,858,794|31477158|
|(long string) (true) String#startsWith|63,608,978|31809533|
|(long string) (true) String#slice and strict comparison|57,711,030|28972468|
|(short string) (false) String#startsWith|98,279,732|49139903|
|(short string) (false) String#slice and strict comparison|61,755,124|30877568|
|(long string) (false) String#startsWith|89,153,293|44576671|
|(long string) (false) String#slice and strict comparison|56,132,629|28083312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:47:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42000479,"opsSec":84000940.02379884},{"name":"(short string) (true) String#slice and strict comparison","samples":31477158,"opsSec":62858794.76972721},{"name":"(long string) (true) String#startsWith","samples":31809533,"opsSec":63608978.37933678},{"name":"(long string) (true) String#slice and strict comparison","samples":28972468,"opsSec":57711030.53851998},{"name":"(short string) (false) String#startsWith","samples":49139903,"opsSec":98279732.09364146},{"name":"(short string) (false) String#slice and strict comparison","samples":30877568,"opsSec":61755124.51354684},{"name":"(long string) (false) String#startsWith","samples":44576671,"opsSec":89153293.8572213},{"name":"(long string) (false) String#slice and strict comparison","samples":28083312,"opsSec":56132629.85482939}]}-->
