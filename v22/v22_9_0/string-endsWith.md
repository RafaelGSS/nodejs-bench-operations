## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,795,573|7397787|
|(short string) (true) String#slice and strict comparison|13,232,784|6616393|
|(long string) (true) String#endsWith|14,038,049|7019025|
|(long string) (true) String#slice and strict comparison|12,776,337|6388169|
|(short string) (false) String#endsWith|14,883,863|7441932|
|(short string) (false) String#slice and strict comparison|13,125,472|6562737|
|(long string) (false) String#endsWith|14,876,035|7438018|
|(long string) (false) String#slice and strict comparison|12,946,880|6473441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:49:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14795573.20103092,"samples":7397787},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13232784.517802754,"samples":6616393},{"name":"(long string) (true) String#endsWith","opsSec":14038049.298075235,"samples":7019025},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12776337.795610504,"samples":6388169},{"name":"(short string) (false) String#endsWith","opsSec":14883863.880491538,"samples":7441932},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13125472.188558547,"samples":6562737},{"name":"(long string) (false) String#endsWith","opsSec":14876035.940143198,"samples":7438018},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12946880.213624962,"samples":6473441}]}-->
