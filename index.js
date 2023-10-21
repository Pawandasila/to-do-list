$(document).ready(function() {
    $("#add").click(function() {
        var title = $("#title").val();
        var description = $("#description").val();

        if (title && description) {
            // $(".default-data").show();

            var newRow = $("<tr>");
            var cols = "";

            cols += "<td>" + ($("#tableBody tr").length ) + "</td>";
            cols += "<td>" + title + "</td>";
            cols += "<td>" + description + "</td>";
            cols += '<td><button class="btn btn-sm btn-danger edit" data-toggle="modal" data-target="#editModal">Edit</button></td>';
            cols += '<td><button class="btn btn-sm btn-danger delete">Delete</button></td>';

            newRow.append(cols);
            $("#tableBody").append(newRow);

            $("#title, #description").val('');

            // Close the modal if it's open
            $('#emptyFieldsModal').modal('hide');
        } else {
            // Show the modal for empty fields
            $('#emptyFieldsModal').modal('show');
        }
    });

    var editedRow;

    $("#tableBody").on("click", ".edit", function() {
        // Get the row to edit
        editedRow = $(this).closest("tr");

        // Get the values from the table row for editing
        var title = editedRow.find("td:eq(1)").text();
        var description = editedRow.find("td:eq(2)").text();

        // Set the values in the edit modal
        $("#editTitle").val(title);
        $("#editDescription").val(description);
    });

    // Event listener for the Save Edit button in the Edit modal
    $("#saveEdit").click(function() {
        // Get the edited values
        var editedTitle = $("#editTitle").val();
        var editedDescription = $("#editDescription").val();

        // Update the values in the specific table row
        editedRow.find("td:eq(1)").text(editedTitle);
        editedRow.find("td:eq(2)").text(editedDescription);

        // Close the Edit modal
        $('#editModal').modal('hide');
    });

    $("#deleteButton").click(function() {
       $('#deleteModal').model('show');
        
    });
     // Delete row on delete button click
     $("#tableBody").on("click", ".delete", function() {
            // $("#deleteModal").modal('show');
            $(this).closest("tr").remove();
            updateSerialNumbers();
        });

        $("#clear").click(function() {
            $("#tableBody").empty();
        });

        function updateSerialNumbers() {
            $("#tableBody tr").each(function(index) {
                $(this).find("td:first").text(index + 1);
            });
        }
    });

    $(document).ready(function() {
        $("#clear").click(function() {
            // Check if there are items to clear
            if ($("#tableBody tr").length === 0) {
                // Update the text of the empty list modal
                $('#emptyListModal .modal-body').text('There are no items to clear.');
                // Display the empty list modal
                $('#emptyListModal').modal('show');
            } else {
                // Clear the items
                $("#tableBody").empty();
            }
        });
    });