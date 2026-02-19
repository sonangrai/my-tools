import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function ToolGrid() {
  return (
    <section id="tools-section">
      <div className="container mx-auto">
        <div className="columns-3">
          <Link
            href={`/tools/image-compressor`}
            className="break-inside-avoid mb-1"
          >
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Image Compressor</CardTitle>
                <CardDescription>Compress your big size image</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ToolGrid;
