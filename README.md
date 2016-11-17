# jquery-panelflip.js

Flip &lt;div&gt; by using CSS Transition.

jQuery required.

## Usage
`$(selector).panelflip()`

    <script>
    $(function(){
        $('.flip-container').panelflip({
            perspective: "1000px",
            transition: "0.6s"
        });
    });
    </script>

    <div class="flip-container">
        <div class>Front</div>
        <div class>Back</div>
    </div>
