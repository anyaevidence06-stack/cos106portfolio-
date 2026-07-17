document.addEventListener( "DOMContentLoaded", () =>
{

    // ==========================================
    // INTERACTIVE TASKS LOGIC (ACADEMIC PLANNER)
    // ==========================================
    const taskInput = document.getElementById( "taskInput" );
    const addTaskBtn = document.getElementById( "addTaskBtn" );
    const taskList = document.getElementById( "taskList" );

    // Dynamic Tracking Array to fulfill structural array requirement
    let tasks = [
        { id: 1, text: "Finalize COS 106 Web Portfolio Deployment Staging", completed: false },
        { id: 2, text: "Review Python Triangle Validation Scripts", completed: true }
    ];

    function renderTasks ()
    {
        if ( !taskList ) return; // Guard clause if element doesn't exist on this page
        taskList.innerHTML = "";
        tasks.forEach( task =>
        {
            const li = document.createElement( "li" );
            li.className = `task-item ${ task.completed ? 'completed' : '' }`;

            const textSpan = document.createElement( "span" );
            textSpan.textContent = task.text;
            textSpan.style.cursor = "pointer";

            // Event Handling: Toggle task status
            textSpan.addEventListener( "click", () =>
            {
                task.completed = !task.completed;
                renderTasks();
            } );

            const deleteBtn = document.createElement( "button" );
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "Purge";

            // Event Handling: Filter layout modification array
            deleteBtn.addEventListener( "click", ( e ) =>
            {
                e.stopPropagation();
                tasks = tasks.filter( t => t.id !== task.id );
                renderTasks();
            } );

            li.appendChild( textSpan );
            li.appendChild( deleteBtn );
            taskList.appendChild( li );
        } );
    }

    if ( addTaskBtn )
    {
        addTaskBtn.addEventListener( "click", () =>
        {
            const taskText = taskInput.value.trim();
            if ( taskText !== "" )
            {
                const newTask = {
                    id: Date.now(),
                    text: taskText,
                    completed: false
                };
                tasks.push( newTask );
                taskInput.value = "";
                renderTasks();
            }
        } );
    }

    renderTasks(); // Populate default node array items


    // ==========================================
    // GATEWAY FORM JAVASCRIPT VALIDATION ENGINE
    // ==========================================
    const contactForm = document.getElementById( "contactForm" );
    const formFeedback = document.getElementById( "formFeedback" );

    if ( contactForm )
    {
        contactForm.addEventListener( "submit", ( event ) =>
        {
            event.preventDefault();

            const name = document.getElementById( "name" ).value.trim();
            const email = document.getElementById( "email" ).value.trim();
            const phone = document.getElementById( "phone" ).value.trim();
            const message = document.getElementById( "message" ).value.trim();

            // 1. Structural Verification: No Fields Empty
            if ( !name || !email || !phone || !message )
            {
                formFeedback.textContent = "Execution Terminated: Empty parameter fields detected.";
                formFeedback.style.color = "#e74c3c";
                return;
            }

            // 2. Structural Verification: Format of Electronic Mail Address
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if ( !emailRegex.test( email ) )
            {
                formFeedback.textContent = "Execution Terminated: Handshake rejected. Email signature invalid.";
                formFeedback.style.color = "#e74c3c";
                return;
            }

            // 3. Structural Verification: Comms Phone number accepts only digits
            const phoneRegex = /^[0-9]+$/;
            if ( !phoneRegex.test( phone ) )
            {
                formFeedback.textContent = "Execution Terminated: Communications pipeline must contain numerical digits only.";
                formFeedback.style.color = "#e74c3c";
                return;
            }

            // Successful form handling validation logic
            formFeedback.textContent = "Transmission Confirmed. Data packet successfully routed.";
            formFeedback.style.color = "#ff007f";

            contactForm.reset();
        } );
    }
} );
