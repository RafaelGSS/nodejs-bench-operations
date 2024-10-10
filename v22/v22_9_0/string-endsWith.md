## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|128,046,006|64028283|
|(short string) (true) String#slice and strict comparison|58,948,516|29474270|
|(long string) (true) String#endsWith|64,159,462|32090719|
|(long string) (true) String#slice and strict comparison|53,276,523|26640096|
|(short string) (false) String#endsWith|94,658,004|47343231|
|(short string) (false) String#slice and strict comparison|58,866,744|29433383|
|(long string) (false) String#endsWith|84,045,751|42031940|
|(long string) (false) String#slice and strict comparison|52,673,381|26336694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:47:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":128046006.8140941,"samples":64028283},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58948516.18479947,"samples":29474270},{"name":"(long string) (true) String#endsWith","opsSec":64159462.10104115,"samples":32090719},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53276523.80478299,"samples":26640096},{"name":"(short string) (false) String#endsWith","opsSec":94658004.58544946,"samples":47343231},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58866744.21930464,"samples":29433383},{"name":"(long string) (false) String#endsWith","opsSec":84045751.49949305,"samples":42031940},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52673381.679194205,"samples":26336694}]}-->
