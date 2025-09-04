## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,545,927|26291634|
|(short string) (true) String#slice and strict comparison|48,657,441|24328727|
|(long string) (true) String#endsWith|49,758,282|24879153|
|(long string) (true) String#slice and strict comparison|43,875,740|21938900|
|(short string) (false) String#endsWith|56,829,262|28414640|
|(short string) (false) String#slice and strict comparison|54,797,037|27405795|
|(long string) (false) String#endsWith|54,041,969|27111201|
|(long string) (false) String#slice and strict comparison|48,783,748|24394459|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:37:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26291634,"opsSec":52545927.91779491},{"name":"(short string) (true) String#slice and strict comparison","samples":24328727,"opsSec":48657441.05712068},{"name":"(long string) (true) String#endsWith","samples":24879153,"opsSec":49758282.2155411},{"name":"(long string) (true) String#slice and strict comparison","samples":21938900,"opsSec":43875740.64823694},{"name":"(short string) (false) String#endsWith","samples":28414640,"opsSec":56829262.15561169},{"name":"(short string) (false) String#slice and strict comparison","samples":27405795,"opsSec":54797037.55073765},{"name":"(long string) (false) String#endsWith","samples":27111201,"opsSec":54041969.80564716},{"name":"(long string) (false) String#slice and strict comparison","samples":24394459,"opsSec":48783748.87396932}]}-->
