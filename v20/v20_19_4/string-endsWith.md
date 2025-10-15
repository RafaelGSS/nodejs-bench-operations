## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|49,752,260|24877033|
|(short string) (true) String#slice and strict comparison|61,304,440|30659231|
|(long string) (true) String#endsWith|50,827,761|25413884|
|(long string) (true) String#slice and strict comparison|60,171,839|30091037|
|(short string) (false) String#endsWith|52,538,948|26278757|
|(short string) (false) String#slice and strict comparison|62,144,087|31072989|
|(long string) (false) String#endsWith|55,236,595|27621020|
|(long string) (false) String#slice and strict comparison|58,481,436|29240725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:56:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":24877033,"opsSec":49752260.191964075},{"name":"(short string) (true) String#slice and strict comparison","samples":30659231,"opsSec":61304440.57096149},{"name":"(long string) (true) String#endsWith","samples":25413884,"opsSec":50827761.087424494},{"name":"(long string) (true) String#slice and strict comparison","samples":30091037,"opsSec":60171839.73281088},{"name":"(short string) (false) String#endsWith","samples":26278757,"opsSec":52538948.83703894},{"name":"(short string) (false) String#slice and strict comparison","samples":31072989,"opsSec":62144087.576855905},{"name":"(long string) (false) String#endsWith","samples":27621020,"opsSec":55236595.77064765},{"name":"(long string) (false) String#slice and strict comparison","samples":29240725,"opsSec":58481436.432306744}]}-->
