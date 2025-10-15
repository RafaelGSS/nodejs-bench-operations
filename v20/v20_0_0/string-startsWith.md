## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,946,742|42975815|
|(short string) (true) String#slice and strict comparison|64,309,288|32158095|
|(long string) (true) String#startsWith|65,803,059|32901749|
|(long string) (true) String#slice and strict comparison|59,579,886|29806337|
|(short string) (false) String#startsWith|99,021,848|49510942|
|(short string) (false) String#slice and strict comparison|63,863,843|31940909|
|(long string) (false) String#startsWith|92,314,610|46157306|
|(long string) (false) String#slice and strict comparison|59,067,163|29538850|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:08:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42975815,"opsSec":85946742.03688687},{"name":"(short string) (true) String#slice and strict comparison","samples":32158095,"opsSec":64309288.19857195},{"name":"(long string) (true) String#startsWith","samples":32901749,"opsSec":65803059.620016806},{"name":"(long string) (true) String#slice and strict comparison","samples":29806337,"opsSec":59579886.47351498},{"name":"(short string) (false) String#startsWith","samples":49510942,"opsSec":99021848.94626547},{"name":"(short string) (false) String#slice and strict comparison","samples":31940909,"opsSec":63863843.26585745},{"name":"(long string) (false) String#startsWith","samples":46157306,"opsSec":92314610.33833702},{"name":"(long string) (false) String#slice and strict comparison","samples":29538850,"opsSec":59067163.36313063}]}-->
