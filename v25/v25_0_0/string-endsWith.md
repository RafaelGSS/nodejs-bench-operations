## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,214,749|42111048|
|(short string) (true) String#slice and strict comparison|50,479,007|25239522|
|(long string) (true) String#endsWith|66,187,118|33291190|
|(long string) (true) String#slice and strict comparison|51,673,503|25836762|
|(short string) (false) String#endsWith|92,010,404|46005465|
|(short string) (false) String#slice and strict comparison|54,074,476|27045363|
|(long string) (false) String#endsWith|84,315,139|42157575|
|(long string) (false) String#slice and strict comparison|50,408,812|25204411|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:59:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42111048,"opsSec":84214749.27370284},{"name":"(short string) (true) String#slice and strict comparison","samples":25239522,"opsSec":50479007.957988314},{"name":"(long string) (true) String#endsWith","samples":33291190,"opsSec":66187118.07618051},{"name":"(long string) (true) String#slice and strict comparison","samples":25836762,"opsSec":51673503.43394563},{"name":"(short string) (false) String#endsWith","samples":46005465,"opsSec":92010404.2525501},{"name":"(short string) (false) String#slice and strict comparison","samples":27045363,"opsSec":54074476.94412515},{"name":"(long string) (false) String#endsWith","samples":42157575,"opsSec":84315139.88218322},{"name":"(long string) (false) String#slice and strict comparison","samples":25204411,"opsSec":50408812.623960845}]}-->
